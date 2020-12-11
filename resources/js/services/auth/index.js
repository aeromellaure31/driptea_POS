import axios from 'axios'
import ROUTER from '../../router'
export default {
    // url: 'http://ec2-34-229-81-230.compute-1.amazonaws.com/',
    // url: 'http://ec2-18-206-232-162.compute-1.amazonaws.com/',
    url: 'http://localhost:8000/',
    // url: 'https://driptea.herokuapp.com/',
    productPrice: null,
    imageSelected: null,
    token: null,
    user: {
        cashierId: null,
        fullname: null,
        userType: null
    },
    config: {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
    },
    authenticateRequests() {
        let token = localStorage.getItem('userToken')
        if (token) {
            let toReturn = false
            this.setToken(token)
            axios({
                method: 'post',
                url: this.url + 'user',
                headers: {
                  Authorization: 'Bearer ' + token
                }
            }).then(res => {
                toReturn = true
            }).catch(err => {
                toReturn = false
            })
            return toReturn
        } else {
            return false
        }
    },
    authenticateForAll() {
        let token = localStorage.getItem('userToken')
        if (token) {
            this.setToken(token)
            axios({
                method: 'post', //you can set what request you want to be
                url: this.url + 'user',
                headers: {
                  Authorization: 'Bearer ' + token
                }
            }).then(res => {
                if(res.data.user.account_type.toUpperCase() === 'ADMIN'){
                    this.setUser(res.data.user.id, res.data.user.name, res.data.user.account_type, '/adminDashboard')
                }else if(res.data.user.account_type.toUpperCase() === 'CASHIER'){
                    this.setUser(res.data.user.id, res.data.user.name, res.data.user.account_type, '/casherDashboard')
                }else{
                    localStorage.setItem('fullName', res.data.user.firstname+" "+ res.data.user.lastname )
                    localStorage.setItem('address', res.data.user.address)
                    localStorage.setItem('contactNumber', res.data.user.contactNumber)
                    this.setUser(res.data.user.id, res.data.user.name, res.data.user.account_type, '/onlineDashboard')
                }
            })
            return true
        } else {
            return false    
        }
    },
    setUser(cashierId, fullname, userType, route) {
        if(userType.toUpperCase() === 'ADMIN'){
            localStorage.setItem('adminId', cashierId)
        }else if(userType.toUpperCase() === 'CASHIER'){
            localStorage.setItem('cashierId', cashierId)
        }else{
            localStorage.setItem('customerId', cashierId)
        }
        ROUTER.push(route)
        this.user.cashierId = cashierId
        this.user.fullname = fullname
        this.user.userType = userType
        window.location.reload()
    },
    setToken(token){
        this.token = token
        localStorage.setItem('userToken', token)
        if(token){
          setTimeout(() => {
            axios.post(this.url+'tokenRefresh', ).then(response => {
              this.setToken(response['token'])
            }).catch(err => {
                this.deauthenticate()
            })
          }, 1000 * 60 * 60) // 50min
        }
    },
    refreshToken(){
        axios.post(this.url+'tokenRefresh', ).then(response => {
            this.setToken(response['token'])
        }).catch(err => {
            this.deauthenticate()
        })
    },
    deauthenticate(){
        localStorage.removeItem('userToken')
        localStorage.removeItem('adminId')
        localStorage.removeItem('cashierId')
        localStorage.removeItem('customerId')
        localStorage.removeItem('customerType')
        localStorage.removeItem('fullName')
        localStorage.removeItem('address')
        localStorage.removeItem('contactNumber')
        localStorage.removeItem('customerOnlineId')
        axios.post(this.url+'deaunthenticate')
        this.token = null
        ROUTER.go('/')
    }
}
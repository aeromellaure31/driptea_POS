<?php

namespace App\Http\Controllers;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;

class MailController extends Mailable
{
    use Queueable, SerializesModels;
    public $message;
    public $emailTo;
    public $subject;

    /**
     * Create a new message instance.
     *
     * @return void
     */

        
    public function __construct($message, $emailTo, $subject) {
        $this->emailTo = $emailTo;
        $this->message = $message;
        $this->subject = $subject;
    }

   /**
    * Build the message.
    *
    * @return $this
    */

   public function build()
   {
       return $this->subject($this->subject)->from($this->emailTo)->view('mailNotification', ['content'=>$this->message]);
   }
}

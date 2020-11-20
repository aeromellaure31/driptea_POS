<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('customerId');
            $table->bigInteger('onlineId')->nullable();
            $table->bigInteger('productId');
            $table->string('customerType');
            $table->integer('quantity');
            $table->string('size');
            $table->string('cupType');
            $table->string('sugarLevel');
            $table->double('choosenPrice');
            $table->double('subTotal');
            $table->string('modeOfPayment')->nullable();
            $table->string('ifNotAvailable')->nullable();
            $table->string('status');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}

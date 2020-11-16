<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddAddOns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('add_add_ons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('addons_name');
            $table->double('addons_price');
            $table->double('onlineAddOnsPrice');
            $table->string('status');
            $table->string('remove')->nullable();
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
        Schema::dropIfExists('add_add_ons');
    }
}

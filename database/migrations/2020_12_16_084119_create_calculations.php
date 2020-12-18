<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalculations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calculations', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('adminId');
            $table->integer('packOfPearl');
            $table->integer('canOfFructose');
            $table->integer('bottleSyrup');
            $table->integer('packOfTea');
            $table->integer('canOfWintermelon');
            $table->integer('bottleCreamMilk');
            $table->integer('packOfPowder');
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
        Schema::dropIfExists('calculations');
    }
}

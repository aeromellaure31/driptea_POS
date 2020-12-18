<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('productCategory');
            $table->string('productName');
            $table->longText('ingredients');
            $table->string('description');
            $table->string('status');
            $table->double('lowPrice');
            $table->double('highPrice');
            $table->double('overPrice');
            $table->double('onlinelowPrice');
            $table->double('onlinehighPrice');
            $table->double('onlineoverPrice');
            $table->string('image');
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
        Schema::dropIfExists('products');
    }
}


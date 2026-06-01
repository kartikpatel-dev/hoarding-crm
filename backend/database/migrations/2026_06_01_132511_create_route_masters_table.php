<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('route_masters', function (Blueprint $table) {

            $table->id();

            $table->string('route_name');

            $table->string('start_city');

            $table->string('end_city');

            $table->decimal('distance', 10, 2)->nullable();

            $table->enum('status', [
                'Active',
                'Inactive'
            ])->default('Active');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('route_masters');
    }
};
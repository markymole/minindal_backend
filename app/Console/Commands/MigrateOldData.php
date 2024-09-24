<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use App\Models\Records;

class MigrateOldData extends Command
{
    protected $signature = 'migrate:old-data';
    protected $description = 'Migrate data from the old database to the new structure';

    /**
     * Execute the console command.
     *
     * @return int
     */
   public function handle()
    {
        // Connect to the old database
        $oldRecords = DB::connection('minindal_live_copy')->table('records')->get();

        foreach ($oldRecords as $oldRecord) {
            // Map the old data to the new structure
            $newRecord = [
                'business_name' => $oldRecord->business_name,
                'description' => $oldRecord->description,
                'specialties' => $oldRecord->specialties,
                'categories' => $oldRecord->category,
                'open' => json_encode([
                    'from' => $oldRecord->open_from,
                    'to' => $oldRecord->open_to
                ]),
                'operating_hours' => json_encode([
                    'from' => $oldRecord->operating_from,
                    'to' => $oldRecord->operating_to
                ]),
                'rating' => $oldRecord->rating,
                'phone_numbers' => implode(', ', [
                    $oldRecord->phone_number_one,
                    $oldRecord->phone_number_two
                ]),
                'cover_image' => $oldRecord->image_name,
                'images' => $oldRecord->image_name,
                'town' => $oldRecord->town,
                'address' => $oldRecord->address,
                'coordinates' => json_encode([
                    'latitude' => $oldRecord->latitude,
                    'longitude' => $oldRecord->longitude
                ]),
                'date_applied' => $oldRecord->date_applied,
                'date_approved' => $oldRecord->date_approved,
                'status' => 'Active',
            ];

            // Insert the new data into the new database
            Records::create($newRecord);
        }

        $this->info('Data migration completed successfully.');
    }
}

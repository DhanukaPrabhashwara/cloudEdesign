"use client";

import { useState } from "react";
import { ChevronDown, CalendarDays, Users, Clock } from "lucide-react";

const HeroSection = () => {
  const [selectedLocation, setSelectedLocation] = useState("ABC Ventures - City A");
  const [selectedDate, setSelectedDate] = useState("June 13, 25 - Breakfast");
  const [selectedGuests, setSelectedGuests] = useState("01 Adults");
  const [selectedTable, setSelectedTable] = useState("Table No - 15");

  const locations = [
    "ABC Ventures - City A",
    "ABC Ventures - City B", 
    "ABC Ventures - City C",
    "ABC Ventures - Downtown"
  ];

  const dateOptions = [
    "June 13, 25 - Breakfast",
    "June 13, 25 - Lunch", 
    "June 13, 25 - Dinner",
    "June 14, 25 - Breakfast",
    "June 14, 25 - Lunch",
    "June 14, 25 - Dinner"
  ];

  const guestOptions = [
    "01 Adults",
    "02 Adults",
    "03 Adults", 
    "04 Adults",
    "05 Adults",
    "06 Adults",
    "01 Adult + 01 Child",
    "02 Adults + 01 Child",
    "02 Adults + 02 Children"
  ];

  const tableOptions = [
    "Table No - 15",
    "Table No - 12",
    "Table No - 08",
    "Table No - 05",
    "Table No - 03",
    "VIP Table - 01"
  ];

  const handleReservation = () => {
    console.log("Reservation Details:", {
      location: selectedLocation,
      date: selectedDate,
      guests: selectedGuests,
      table: selectedTable
    });
    // Handle reservation logic here
    alert("Reservation request submitted!");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Restaurant Branding */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-800 mb-6 leading-tight">
            ABC Ventures - City A
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Experience culinary excellence in the heart of the city with our carefully crafted dishes and warm hospitality
          </p>
        </div>

        {/* Reservation Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
            
            {/* Location Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <CalendarDays className="inline w-4 h-4 mr-2" />
                Location
              </label>
              <div className="relative">
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors"
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 pointer-events-none" />
              </div>
            </div>

            {/* Date & Time Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="inline w-4 h-4 mr-2" />
                Date & Time
              </label>
              <div className="relative">
                <select 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors"
                >
                  {dateOptions.map((date, index) => (
                    <option key={index} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 pointer-events-none" />
              </div>
            </div>

            {/* Guests Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="inline w-4 h-4 mr-2" />
                Guests
              </label>
              <div className="relative">
                <select 
                  value={selectedGuests}
                  onChange={(e) => setSelectedGuests(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors"
                >
                  {guestOptions.map((guest, index) => (
                    <option key={index} value={guest}>
                      {guest}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 pointer-events-none" />
              </div>
            </div>

            {/* Table Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Table Selection
              </label>
              <div className="relative">
                <select 
                  value={selectedTable}
                  onChange={(e) => setSelectedTable(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors"
                >
                  {tableOptions.map((table, index) => (
                    <option key={index} value={table}>
                      {table}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Reserve Button */}
          <div className="mt-8 text-center lg:text-right">
            <button 
              onClick={handleReservation}
              className="bg-red-700 hover:bg-red-800 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reserve Now
            </button>
          </div>
        </div>

        {/* Restaurant Title Below Form */}
        <div className="text-center mt-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 opacity-80">
            ABC Ventures - City A
          </h2>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Booking</h3>
            <p className="text-gray-600">Reserve your table in just a few clicks with our simple booking system</p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Perfect for Groups</h3>
            <p className="text-gray-600">Accommodating parties of all sizes with flexible seating arrangements</p>
          </div>
          
          <div className="p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Timing</h3>
            <p className="text-gray-600">Open for breakfast, lunch, and dinner to serve you throughout the day</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
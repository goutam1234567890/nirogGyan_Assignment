import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useAppContext();
  
  const doctor = state.doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h2>
          <Link
            to="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Doctors List
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available Today':
        return 'bg-green-100 text-green-800';
      case 'Fully Booked':
        return 'bg-red-100 text-red-800';
      case 'On Leave':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Doctors
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Doctor Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start space-x-6">
              <img
                src={doctor.profileImage}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=3b82f6&color=fff&size=96`;
                }}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {doctor.name}
                    </h1>
                    <p className="text-lg text-primary-600 font-medium mb-2">
                      {doctor.specialization}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>⭐ {doctor.rating}/5.0</span>
                      <span>• {doctor.experience} experience</span>
                      <span>• {doctor.location}</span>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      doctor.availabilityStatus
                    )}`}
                  >
                    {doctor.availabilityStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
            <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
          </div>

          {/* Availability Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Availability</h2>
              {doctor.availabilityStatus === 'Available Today' && (
                <Link
                  to={`/book-appointment/${doctor.id}`}
                  className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
                >
                  Book Appointment
                </Link>
              )}
            </div>

            {doctor.availability.length > 0 ? (
              <div className="space-y-4">
                {doctor.availability.map((daySlot, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">
                      {formatDate(daySlot.date)}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {daySlot.slots.map((slot, slotIndex) => (
                        <div
                          key={slotIndex}
                          className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-center text-sm font-medium text-gray-700"
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-2">📅</div>
                <p>No available slots at the moment</p>
              </div>
            )}

            {doctor.availabilityStatus !== 'Available Today' && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  {doctor.availabilityStatus === 'Fully Booked' 
                    ? 'This doctor is fully booked for today. Please check availability for upcoming dates.'
                    : 'This doctor is currently on leave. Please check back later for availability.'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorProfile;

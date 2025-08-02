import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { AppointmentForm } from '../types';

const BookAppointment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  
  const doctor = state.doctors.find(d => d.id === id);
  
  const [formData, setFormData] = useState<AppointmentForm>({
    patientName: '',
    email: '',
    date: '',
    time: ''
  });
  
  const [errors, setErrors] = useState<Partial<AppointmentForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h2>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Back to Doctors List
          </Link>
        </div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<AppointmentForm> = {};
    
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }
    
    if (!formData.time) {
      newErrors.time = 'Please select a time slot';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof AppointmentForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newAppointment = {
        id: Date.now().toString(),
        doctorId: doctor.id,
        patientName: formData.patientName,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        status: 'confirmed' as const
      };
      
      dispatch({ type: 'ADD_APPOINTMENT', payload: newAppointment });
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 1000);
  };

  const getAvailableDates = () => {
    // Get today's date at midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Filter available dates that are today or in the future
    return doctor.availability
      .map(slot => slot.date)
      .filter(date => {
        const slotDate = new Date(date);
        return slotDate >= today;
      })
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  };

  const getAvailableSlots = (selectedDate: string) => {
    const daySlot = doctor.availability.find(slot => slot.date === selectedDate);
    return daySlot ? daySlot.slots : [];
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFormData(prev => ({
      ...prev,
      date: selectedDate,
      time: '' // Reset time when date changes
    }));
    
    // Clear date error when user selects a date
    if (errors.date) {
      setErrors(prev => ({ ...prev, date: '' }));
    }
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="text-green-500 text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Appointment Confirmed!
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Appointment Details:</h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Doctor:</span> {doctor.name}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Patient:</span> {formData.patientName}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Date:</span> {new Date(formData.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Time:</span> {formData.time}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {formData.email}
              </p>
            </div>
            <p className="text-gray-600 mb-6">
              A confirmation email has been sent to {formData.email}
            </p>
            <div className="space-y-3">
              <button
                onClick={() => navigate(`/doctor/${doctor.id}`)}
                className="w-full bg-primary-600 text-white py-2 px-4 rounded-md font-medium hover:bg-primary-700 transition-colors"
              >
                Back to Doctor Profile
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Browse More Doctors
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to={`/doctor/${doctor.id}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to {doctor.name}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Book Appointment
            </h1>
            <div className="flex items-center space-x-4">
              <img
                src={doctor.profileImage}
                alt={doctor.name}
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=3b82f6&color=fff&size=48`;
                }}
              />
              <div>
                <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-primary-600">{doctor.specialization}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Name */}
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name *
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                  errors.patientName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter patient's full name"
              />
              {errors.patientName && (
                <p className="mt-1 text-sm text-red-600">{errors.patientName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Appointment Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleDateChange}
                min={getAvailableDates()[0]}
                max={getAvailableDates()[getAvailableDates().length - 1]}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.date ? (
                <p className="mt-1 text-sm text-red-600">{errors.date}</p>
              ) : (
                <p className="mt-1 text-sm text-gray-500">
                  Available on {getAvailableDates().length} days between {
                    new Date(getAvailableDates()[0]).toLocaleDateString()
                  } and {
                    new Date(getAvailableDates()[getAvailableDates().length - 1]).toLocaleDateString()
                  }
                </p>
              )}
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Appointment Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                disabled={!formData.date}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                  errors.time ? 'border-red-500' : 'border-gray-300'
                } ${!formData.date ? 'bg-gray-100 cursor-not-allowed' : ''}`}
              >
                <option value="">Select a time</option>
                {getAvailableSlots(formData.date).map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="mt-1 text-sm text-red-600">{errors.time}</p>
              )}
              {!formData.date && (
                <p className="mt-1 text-sm text-gray-500">Please select a date first</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700'
                } text-white`}
              >
                {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BookAppointment;

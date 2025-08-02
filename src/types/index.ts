export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  profileImage: string;
  availabilityStatus: 'Available Today' | 'Fully Booked' | 'On Leave';
  experience: string;
  rating: number;
  location: string;
  about: string;
  availability: TimeSlot[];
}

export interface TimeSlot {
  date: string;
  slots: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  email: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface AppointmentForm {
  patientName: string;
  email: string;
  date: string;
  time: string;
}

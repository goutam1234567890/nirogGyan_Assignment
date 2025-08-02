import { Doctor } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    availabilityStatus: 'Available Today',
    experience: '15 years',
    rating: 4.8,
    location: 'New York Medical Center',
    about: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and cardiac rehabilitation.',
    availability: [
      {
        date: '2025-08-03',
        slots: ['09:00', '10:00', '11:00', '14:00', '15:00']
      },
      {
        date: '2025-08-04',
        slots: ['09:00', '10:30', '14:00', '15:30']
      },
      {
        date: '2025-08-05',
        slots: ['10:00', '11:00', '16:00']
      }
    ]
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Dermatologist',
    profileImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    availabilityStatus: 'Available Today',
    experience: '12 years',
    rating: 4.9,
    location: 'Downtown Skin Clinic',
    about: 'Dr. Michael Chen is a renowned dermatologist specializing in both medical and cosmetic dermatology. He has extensive experience in treating skin conditions and aesthetic procedures.',
    availability: [
      {
        date: '2025-08-03',
        slots: ['08:30', '09:30', '13:00', '14:30', '16:00']
      },
      {
        date: '2025-08-04',
        slots: ['09:00', '11:00', '13:30', '15:00']
      }
    ]
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Pediatrician',
    profileImage: 'https://images.unsplash.com/photo-1594824475317-d0e5b8b6b0c8?w=300&h=300&fit=crop&crop=face',
    availabilityStatus: 'Fully Booked',
    experience: '10 years',
    rating: 4.7,
    location: 'Children\'s Health Center',
    about: 'Dr. Emily Rodriguez is a dedicated pediatrician who provides comprehensive healthcare for children from infancy through adolescence. She is known for her gentle approach with young patients.',
    availability: [
      {
        date: '2025-08-06',
        slots: ['09:00', '10:00']
      },
      {
        date: '2025-08-07',
        slots: ['14:00', '15:00', '16:00']
      }
    ]
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialization: 'Orthopedic Surgeon',
    profileImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
    availabilityStatus: 'Available Today',
    experience: '18 years',
    rating: 4.6,
    location: 'Orthopedic Specialty Hospital',
    about: 'Dr. James Wilson is an experienced orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 2000 successful surgeries.',
    availability: [
      {
        date: '2025-08-03',
        slots: ['08:00', '09:00', '13:00']
      },
      {
        date: '2025-08-05',
        slots: ['08:30', '10:00', '14:00', '15:30']
      }
    ]
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    specialization: 'Neurologist',
    profileImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=300&fit=crop&crop=face',
    availabilityStatus: 'On Leave',
    experience: '14 years',
    rating: 4.8,
    location: 'Neurology Institute',
    about: 'Dr. Lisa Thompson is a board-certified neurologist with expertise in treating neurological disorders including epilepsy, migraines, and movement disorders.',
    availability: [
      {
        date: '2025-08-10',
        slots: ['09:00', '11:00', '14:00']
      }
    ]
  },
  {
    id: '6',
    name: 'Dr. Robert Kumar',
    specialization: 'General Physician',
    profileImage: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face',
    availabilityStatus: 'Available Today',
    experience: '8 years',
    rating: 4.5,
    location: 'Community Health Center',
    about: 'Dr. Robert Kumar is a general physician providing comprehensive primary care services. He focuses on preventive medicine and managing chronic conditions.',
    availability: [
      {
        date: '2025-08-03',
        slots: ['09:30', '11:00', '13:30', '15:00', '16:30']
      },
      {
        date: '2025-08-04',
        slots: ['08:00', '10:00', '14:00', '16:00']
      },
      {
        date: '2025-08-05',
        slots: ['09:00', '11:30', '15:00']
      }
    ]
  }
];

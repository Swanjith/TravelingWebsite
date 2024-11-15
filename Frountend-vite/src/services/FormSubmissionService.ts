import { BookingFormData, Route } from '@/types/types';

export class FormSubmissionService {
  static handleSubmit(e: Event): void {
    e.preventDefault();

    const routes: Route[] = Array.from(document.querySelectorAll('.route-section')).map(section => {
      const from = (section.querySelector('select[id^="from-"]') as HTMLSelectElement).value;
      const to = (section.querySelector('select[id^="to-"]') as HTMLSelectElement).value;
      const departure = (section.querySelector('input[id^="departure-"]') as any)._flatpickr.selectedDates[0];
      const returnInput = section.querySelector('input[id^="return-"]') as any;
      const returnDate = returnInput?._flatpickr?.selectedDates[0];

      return {
        from,
        to,
        departure: departure?.toISOString().split('T')[0],
        ...(returnDate && { return: returnDate.toISOString().split('T')[0] })
      };
    });

    const tripType = document.querySelector('.trip-type-btn.active')?.getAttribute('data-type') as BookingFormData['tripType'];

    const formData: BookingFormData = {
      tripType,
      routes
    };

    console.log(formData);
  }
}
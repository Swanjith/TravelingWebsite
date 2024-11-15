import flatpickr from 'flatpickr';

export class DatePickerService {
  private datePickers: Map<string, flatpickr.Instance>;

  constructor() {
    this.datePickers = new Map();
  }

  initialize(): void {
    document.querySelectorAll('.flatpickr-input').forEach(input => {
      const isReturn = input.id.startsWith('return-');
      const linkedDepartureId = isReturn ?
        input.id.replace('return-', 'departure-') : null;

      const picker = flatpickr(input as HTMLElement, {
        minDate: 'today',
        dateFormat: 'Y-m-d',
        onChange: (selectedDates) => {
          if (!isReturn && linkedDepartureId) {
            const returnPicker = this.datePickers.get(`return-${input.id.split('-')[1]}`);
            if (returnPicker) {
              returnPicker.set('minDate', selectedDates[0]);
            }
          }
        }
      });

      this.datePickers.set(input.id, picker);
    });
  }

  clear(): void {
    this.datePickers.forEach(picker => picker.destroy());
    this.datePickers.clear();
  }

  destroyPickers(inputs: NodeListOf<Element>): void {
    inputs.forEach(input => {
      this.datePickers.get(input.id)?.destroy();
      this.datePickers.delete(input.id);
    });
  }
}
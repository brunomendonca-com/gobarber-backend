import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmensRepository from '../repositories/fakes/FakeAppointmensRepository';

describe('CreateAppointment', () => {
  it('should create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmensRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  // it('should not create two appointments on the same time and date', () => {
  //   expect();
  // })
});

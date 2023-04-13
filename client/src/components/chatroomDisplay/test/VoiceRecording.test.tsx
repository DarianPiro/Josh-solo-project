import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders, mockMediaDevices } from '../../../test/testUtils';
import VoiceRecording from '../VoiceRecording';

jest.mock('mic-recorder-to-mp3', () => {
  return jest.fn().mockImplementation(() => {
    return {
      start: jest.fn(),
      stop: jest.fn().mockResolvedValue([
        new Buffer('fake mp3 data'),
        new Blob(['fake mp3 data'], { type: 'audio/mpeg' })
      ]),
      getMp3: jest.fn().mockResolvedValue([
        new Buffer('fake mp3 data'),
        new Blob(['fake mp3 data'], { type: 'audio/mpeg' })
      ])
    };
  });
});

// jest.mock('mic-recorder-to-mp3', () => ({
//   __esModule: true,
//   default: jest.fn().mockReturnValue(Promise.resolve([])),
// }));



describe('VoiceRecording', () => {
  test('renders start recording button by default', () => {
    renderWithProviders(<VoiceRecording />);

    const startButton = screen.getByTestId('start_recording');
    expect(startButton).toBeInTheDocument();
  });

  test('clicking on start recording button should trigger recording', async () => {
    const startSpy = jest.spyOn(VoiceRecording.prototype, 'start');
    renderWithProviders(<VoiceRecording />);

    const startButton = screen.getByTestId('start_recording');
    fireEvent.click(startButton);

    expect(startSpy).toHaveBeenCalled();
    expect(mockMediaDevices).toHaveBeenCalled();
  });

  test('renders stop recording button after clicking start recording button', async () => {
    renderWithProviders(<VoiceRecording />);

    const startButton = screen.getByTestId('start_recording');
    fireEvent.click(startButton);

    const stopButton = screen.getByTestId('stop_recording');
    expect(stopButton).toBeInTheDocument();
  });

  test('clicking on stop recording button should stop recording', async () => {
    const stopSpy = jest.spyOn(VoiceRecording.prototype, 'stop');
    renderWithProviders(<VoiceRecording />);

    const startButton = screen.getByTestId('start_recording');
    fireEvent.click(startButton);

    const stopButton = screen.getByTestId('stop_recording');
    fireEvent.click(stopButton);

    expect(stopSpy).toHaveBeenCalled();
  });
});

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../test/testUtils';
import VoiceRecording from '../VoiceRecording';

// const mockGetUserMedia = jest.fn(async () => {
//   return new Promise<void>(resolve => {
//       resolve()
//   })
// })

describe('VoiceRecording', () => {
  // beforeEach(() => {
  //   jest.spyOn(window.navigator.mediaDevices, 'getUserMedia')
  //     .mockImplementation(mockGetUserMedia);
  // });

  // afterEach(() => {
  //   jest.restoreAllMocks();
  // });

  // Object.defineProperty(window, 'navigator', {
  //   value: {
  //     mediaDevices: {
  //       getUserMedia: jest.fn(async () => {
  //         return new Promise<void>(resolve => {
  //           resolve();
  //         });
  //       }),
  //     },
  //   },
  // });

  // const mockGetUserMedia = {
  //   getUserMedia: jest.fn().mockImplementation(() => {
  //     return new Promise<void>((resolve) => {
  //       resolve();
  //     });
  //   }),
  // };
  // navigator.getUserMedia = mockGetUserMedia;

  const mockMediaDevices = {
    getUserMedia: jest.fn().mockResolvedValueOnce('fake data'),
  };

  Object.defineProperty(navigator, 'mediaDevices', {
    writable: true,
    value: mockMediaDevices,
  });

  navigator.mediaDevices.getUserMedia = () => {
    return new Promise((resolve) => {
      resolve();
    });
  };
  
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
    expect(mockGetUserMedia).toHaveBeenCalled();
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

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../test/testUtils';
import VoiceRecording from '../VoiceRecording';

describe('VoiceRecording', () => {
  test('renders start recording button by default', () => {
    renderWithProviders(<VoiceRecording />);

    const startButton = screen.getByTestId('start_recording');
    expect(startButton).toBeInTheDocument();
  });

  test('clicking on start recording button should trigger recording', () => {
    navigator.getUserMedia = jest.fn();
    const startSpy = jest.spyOn(VoiceRecording.prototype, 'start');
    renderWithProviders(<VoiceRecording />);

    const startButton = screen.getByTestId('start_recording');
    fireEvent.click(startButton);

    expect(startSpy).toHaveBeenCalled();
  });

  test('renders stop recording button after clicking start recording button', () => {
    renderWithProviders(<VoiceRecording />);

    const startButton = screen.getByTestId('start_recording');
    fireEvent.click(startButton);

    const stopButton = screen.getByTestId('stop_recording');
    expect(stopButton).toBeInTheDocument();
  });

  test('clicking on stop recording button should stop recording', () => {
    const stopSpy = jest.spyOn(VoiceRecording.prototype, 'stop');
    renderWithProviders(<VoiceRecording />);

    const startButton = screen.getByTestId('start_recording');
    fireEvent.click(startButton);

    const stopButton = screen.getByTestId('stop_recording');
    fireEvent.click(stopButton);

    expect(stopSpy).toHaveBeenCalled();
  });
});

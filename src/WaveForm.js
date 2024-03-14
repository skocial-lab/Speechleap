import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import { Highlight } from './bubbles';
var waveSurfer;
export function getCurrentDuration() {
    return waveSurfer.getCurrentTime()
}
const Waveform = ({ audio }) => {
    const containerRef = useRef()
    const waveSurferRef = useRef({
        isPlaying: () => false
    })
    const [isPlaying, toggleIsPlaying] = useState(false)

    useEffect(() => {
        waveSurfer = WaveSurfer.create({
            container: '#waveform',
            responsive: true,
            cursorWidth: 0,
            barWidth: 2,
            barHeight: 10,
            height: 50
        })
        waveSurfer.load(audio)
        waveSurfer.on('ready', () => {
            waveSurferRef.current = waveSurfer
        })
        waveSurfer.on('audioprocess', () => {
            var t = waveSurfer.getCurrentTime();
            Highlight(t);
        })
        return () => {
            waveSurfer.destroy()
        }
    }, [audio])

    return (
        <>
            <button
                onClick={() => {
                    waveSurferRef.current.playPause()
                    toggleIsPlaying(waveSurferRef.current.isPlaying())
                }}
                type="button"
            >
                {isPlaying ? 'pause' : 'play'}
            </button>
            <div id='waveform' ref={containerRef.current} />
        </>
    )
}

Waveform.propTypes = {
    audio: PropTypes.string.isRequired

}

export default Waveform
import React, { useState, useEffect } from 'react';

// Import all logos from assets/clientLogos
import a1townshipJpeg from '../assets/clientLogos/a1township.jpeg';
import a1townshipPng from '../assets/clientLogos/a1township.png';
import accenflair from '../assets/clientLogos/accenflair.webp';
import aiedge from '../assets/clientLogos/aiedge.jpeg';
import alkaline from '../assets/clientLogos/alkaline.png';
import baklava from '../assets/clientLogos/baklava.avif';
import bandharyglass from '../assets/clientLogos/bandharyglass.png';
import clevernest from '../assets/clientLogos/clevernest.jpg';
import dadus from '../assets/clientLogos/dadus.avif';
import dwlabs from '../assets/clientLogos/dwlabs.jpeg';
import eeshanya from '../assets/clientLogos/eeshanya.png';
import genericsol from '../assets/clientLogos/genericsol.jpeg';
import Google from '../assets/clientLogos/Google.png';
import hrh from '../assets/clientLogos/hrh.jpeg';
import kotaklife from '../assets/clientLogos/kotaklife.jpg';
import ominnovation from '../assets/clientLogos/ominnovation.png';
import Raviraj from '../assets/clientLogos/Raviraj.svg';
import sevan from '../assets/clientLogos/sevan.avif';
import sindbakery from '../assets/clientLogos/sindbakery.png';
import smfibers from '../assets/clientLogos/smfibers.svg';
import sricomfort from '../assets/clientLogos/sricomfort.png';
import sriramfinance from '../assets/clientLogos/sriramfinance.jpg';
import tata from '../assets/clientLogos/tata.png';
import techmahindra from '../assets/clientLogos/techmahindra.png';
import teleperformance from '../assets/clientLogos/teleperformance.png';
import vortalsoft from '../assets/clientLogos/vortalsoft.jpg';
import Wipro from '../assets/clientLogos/Wipro.svg';
import zeelmedia from '../assets/clientLogos/zeelmedia.png';

// List of all logos
const companyLogos = [
    { src: a1townshipJpeg },
    { src: a1townshipPng },
    { src: accenflair },
    { src: aiedge },
    { src: alkaline },
    { src: baklava },
    { src: bandharyglass },
    { src: clevernest },
    { src: dadus },
    { src: dwlabs },
    { src: eeshanya },
    { src: genericsol },
    { src: Google },
    { src: hrh },
    { src: kotaklife },
    { src: ominnovation },
    { src: Raviraj },
    { src: sevan },
    { src: sindbakery },
    { src: smfibers },
    { src: sricomfort },
    { src: sriramfinance },
    { src: tata },
    { src: techmahindra },
    { src: teleperformance },
    { src: vortalsoft },
    { src: Wipro },
    { src: zeelmedia },
];

const CARDS_PER_ROW = 4;
const CARD_WIDTH = 210; // px
const CARD_HEIGHT = 130; // px

// Split the logos into two halves (top and bottom)
const half = Math.ceil(companyLogos.length / 2);
const topLogos = companyLogos.slice(0, half);
const bottomLogos = companyLogos.slice(half);

function useScrollingCards(logos: typeof companyLogos, interval = 3000) {
    const [startIdx, setStartIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStartIdx((prev) => (prev + 1) % logos.length);
        }, interval);
        return () => clearInterval(timer);
    }, [logos.length, interval]);

    // Get the visible cards, wrapping around the array
    return Array.from({ length: CARDS_PER_ROW }, (_, i) =>
        logos[(startIdx + i) % logos.length]
    );
}

const LogoRow: React.FC<{ logos: { src: string }[]; rowKey: string }> = ({
    logos,
    rowKey,
}) => (
    <div className="flex justify-center gap-10 mb-8">
        {logos.map((logo, idx) => (
            <div
                key={`${rowKey}-${idx}`}
                className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                    minWidth: `${CARD_WIDTH}px`,
                    maxWidth: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                }}
            >
                <img
                    src={logo.src}
                    alt=""
                    className="h-16 w-auto object-contain mb-2"
                    style={{ maxWidth: '120px' }}
                />
            </div>
        ))}
    </div>
);

const Companies: React.FC = () => {
    const topRow = useScrollingCards(topLogos, 3000);
    const bottomRow = useScrollingCards(bottomLogos, 3000);

    return (
        <section id="companies" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We're proud to work with leading companies across various industries.
                    </p>
                </div>

                <LogoRow logos={topRow} rowKey="top" />
                <LogoRow logos={bottomRow} rowKey="bottom" />

                <div className="mt-12 text-center">
                    <p className="text-gray-600">
                        Join over 500+ satisfied clients who trust GREATHIRE
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Companies;

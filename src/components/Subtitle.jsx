'use client';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Button({ styled, children }) {
    return (
        <ScrollAnimation animateIn='flipInX'
            afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

            }}
      >
        <div className="p-3 bg-black">
            {children}
        </div>
            

        </ScrollAnimation>
    )
}

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm'
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import 'reveal.js/plugin/highlight/monokai.css';
import '../img/port-container.gif';
import '../img/content.mp4';
import '../img/motivation.mp4';
import '../img/docker_logo.png';
import '../img/gradle_logo.png';
import '../img/tools.mp4';
import '../img/gradle.mp4';
import '../img/manifest.mp4';

Reveal.initialize({
    slideNumber: true,
    showSlideNumber: 'all',
    hash: true,
    history: true,
    keyboard: true,
    touch: true,
    plugins: [RevealHighlight],
});

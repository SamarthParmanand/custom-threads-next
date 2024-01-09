import { proxy } from 'valtio';

const state = proxy({
    color: "#222",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;
import * as BABYLON from 'babylonjs';

window.addEventListener('DOMContentLoaded', () => {
  // Otteniamo il riferimento all'elemento canvas
  const canvas = document.getElementById('renderCanvas');

  // Creiamo il motore di Babylon.js
  const engine = new BABYLON.Engine(canvas, true);

  // Creiamo la scena
  const createScene = () => {
    const scene = new BABYLON.Scene(engine);
  
    // Creiamo la camera
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    // Creiamo un ambiente di illuminazione
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    // Creiamo un

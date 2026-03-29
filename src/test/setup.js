import "@testing-library/jest-dom";

class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = IntersectionObserver;

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;

window.HTMLMediaElement.prototype.play = () => Promise.resolve();
window.HTMLMediaElement.prototype.pause = () => {};

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => {},
});

Element.prototype.scrollIntoView = () => {};

HTMLCanvasElement.prototype.getContext = function (type) {
  if (type === "webgl" || type === "webgl2" || type === "experimental-webgl") {
    return {
      createShader: () => ({}),
      shaderSource: () => {},
      compileShader: () => {},
      getShaderParameter: () => true,
      createProgram: () => ({}),
      attachShader: () => {},
      linkProgram: () => {},
      getProgramParameter: () => true,
      useProgram: () => {},
      createBuffer: () => ({}),
      bindBuffer: () => {},
      bufferData: () => {},
      enableVertexAttribArray: () => {},
      vertexAttribPointer: () => {},
      getAttribLocation: () => 0,
      getUniformLocation: () => ({}),
      uniform1f: () => {},
      uniform2f: () => {},
      uniform2fv: () => {},
      uniform3fv: () => {},
      uniform1i: () => {},
      uniformMatrix4fv: () => {},
      drawArrays: () => {},
      viewport: () => {},
      clearColor: () => {},
      clear: () => {},
      enable: () => {},
      disable: () => {},
      blendFunc: () => {},
      createTexture: () => ({}),
      bindTexture: () => {},
      texImage2D: () => {},
      texParameteri: () => {},
      activeTexture: () => {},
      getExtension: () => null,
      canvas: document.createElement("canvas"),
      drawingBufferWidth: 800,
      drawingBufferHeight: 600,
    };
  }
  return null;
};

/* Small task-format helpers shared by Studio and its focused regression test. */
(function (global) {
  function inputLinesFromText(value) {
    const text = String(value ?? '').replace(/\r\n?/g, '\n');
    if (text === '') return [];
    return (text.endsWith('\n') ? text.slice(0, -1) : text).split('\n');
  }

  global.StudioTaskUtils = { inputLinesFromText };
})(window);

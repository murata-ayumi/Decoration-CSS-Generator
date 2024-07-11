document.addEventListener('DOMContentLoaded', function () {
  const gradientButton = document.getElementById('generateGradientButton');
  if (gradientButton) {
    gradientButton.addEventListener('click', generateGradient);
  }

  const shadowButton = document.getElementById('generateShadowButton');
  if (shadowButton) {
    shadowButton.addEventListener('click', generateTextShadow);
  }

  const copyGradientButton = document.getElementById('copyGradientButton');
  if (copyGradientButton) {
    copyGradientButton.addEventListener('click', copyGradientCSS);
  }

  const copyShadowButton = document.getElementById('copyShadowButton');
  if (copyShadowButton) {
    copyShadowButton.addEventListener('click', copyShadowCSS);
  }
});

function generateGradient() {
  let startColor = document.getElementById('startColor').value;
  let endColor = document.getElementById('endColor').value;

  let gradientText = document.getElementById('gradientText');
  if (gradientText) {
    gradientText.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    gradientText.style.webkitBackgroundClip = 'text';
    gradientText.style.webkitTextFillColor = 'transparent';
    gradientText.innerHTML = 'Gradient テキスト';
  } else {
    console.error('Gradient text container not found.');
  }

  let generatedCSS = `background: linear-gradient(to bottom, ${startColor}, ${endColor});
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;`;

  const gradientCSSCode = document.getElementById('gradientCSSCode');
  if (gradientCSSCode) {
    gradientCSSCode.value = generatedCSS;
  } else {
    console.error('CSS text container not found.');
  }
}

document
  .querySelector('#includeNegativeOffset')
  .addEventListener('click', function () {
    this.className = this.checked ? 'checked' : '';
  });

function generateTextShadow() {
  let text = document.getElementById('shadowText').value;
  if (text.trim() === '') {
    alert('テキストを入力してください😢');
    return;
  }

  let shadowColor = document.getElementById('shadowColor').value;
  let fontColor = document.getElementById('fontColor').value; // 追加
  let xOffset = document.getElementById('xOffset').value;
  let yOffset = document.getElementById('yOffset').value;
  let blurRadius = document.getElementById('blurRadius').value;
  let includeNegativeOffset = document.getElementById(
    'includeNegativeOffset'
  ).checked;
  let negativeXOffset = document.getElementById('negativeXOffset').value;
  let negativeYOffset = document.getElementById('negativeYOffset').value;
  let negativeBlurRadius = document.getElementById('negativeBlurRadius').value;
  let negativeShadowColor = document.getElementById(
    'negativeShadowColor'
  ).value;

  let shadowResultText = document.getElementById('shadowResultText');
  if (shadowResultText) {
    let shadowCSS = `text-shadow: ${xOffset}px ${yOffset}px ${blurRadius}px ${shadowColor}`;
    if (includeNegativeOffset) {
      shadowCSS += `, ${negativeXOffset}px ${negativeYOffset}px ${negativeBlurRadius}px ${negativeShadowColor}`;
    }
    shadowResultText.innerHTML = `<span style="color: ${fontColor}; ${shadowCSS};">${text}</span>`;
  } else {
    console.error('Shadow text container not found.');
  }

  let generatedCSS = `text-shadow: ${xOffset}px ${yOffset}px ${blurRadius}px ${shadowColor}`;
  if (includeNegativeOffset) {
    generatedCSS += `, ${negativeXOffset}px ${negativeYOffset}px ${negativeBlurRadius}px ${negativeShadowColor}`;
  }

  const shadowCSSCode = document.getElementById('shadowCSSCode');
  if (shadowCSSCode) {
    shadowCSSCode.value = generatedCSS;
  } else {
    console.error('CSS text container not found.');
  }
}

function copyGradientCSS() {
  const gradientCSSCode = document.getElementById('gradientCSSCode');
  if (gradientCSSCode && gradientCSSCode.value.trim() !== '') {
    navigator.clipboard
      .writeText(gradientCSSCode.value)
      .then(() => {
        alert('クリップボードにコピーしました🎉');
      })
      .catch((err) => {
        alert('クリップボードへのコピーに失敗しました😢');
      });
  } else {
    alert('コピーするCSSコードがありません😢');
  }
}

function copyShadowCSS() {
  const shadowCSSCode = document.getElementById('shadowCSSCode');
  if (shadowCSSCode && shadowCSSCode.value.trim() !== '') {
    navigator.clipboard
      .writeText(shadowCSSCode.value)
      .then(() => {
        alert('クリップボードにコピーしました🎉');
      })
      .catch((err) => {
        alert('クリップボードへのコピーに失敗しました😢');
      });
  } else {
    alert('コピーするCSSコードがありません😢');
  }
}

(function () {
  document.querySelectorAll('[data-skill-category]').forEach(function (categoryEl) {
    var pills = categoryEl.querySelectorAll('.skill-pill');
    var explanationBox = categoryEl.querySelector('[data-skill-explanation-box]');
    var activeSkill = null;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var skillName = pill.getAttribute('data-skill-name');
        var explanation = pill.getAttribute('data-skill-explanation');

        if (activeSkill === skillName) {
          // Deactivate
          pill.classList.remove('active');
          pill.setAttribute('aria-expanded', 'false');
          explanationBox.classList.remove('visible');
          explanationBox.innerHTML = '';
          activeSkill = null;
        } else {
          // Deactivate previous
          pills.forEach(function (p) {
            p.classList.remove('active');
            p.setAttribute('aria-expanded', 'false');
          });
          // Activate new
          pill.classList.add('active');
          pill.setAttribute('aria-expanded', 'true');
          // Built with textContent so characters like < and & in a student's
          // text display as typed instead of being read as HTML.
          explanationBox.innerHTML = '';
          var nameP = document.createElement('p');
          nameP.className = 'font-semibold text-primary mb-1';
          nameP.textContent = skillName;
          explanationBox.appendChild(nameP);
          if (explanation) {
            var textP = document.createElement('p');
            textP.textContent = explanation;
            explanationBox.appendChild(textP);
          }
          explanationBox.classList.add('visible');
          activeSkill = skillName;
        }
      });
    });
  });
})();

function is_numeric(str) {
  if (typeof str !== "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str))
}


function get_allowance(cb) {
  chrome.storage.sync.get(['allowance'], (result) => cb(result.allowance)); 
}

function set_allowance(value, cb) {
  chrome.storage.sync.set({allowance: value}, cb); 
}


function get_time(cb) {
  chrome.storage.sync.get(['time'], (result) => cb(result.time)); 
}

function set_time(value, cb) {
  chrome.storage.sync.set({time: value}, cb); 
}

function reset_time() {
  set_time(0);
}

function increment_time(value, cb) {
  get_time((time) => set_time(time + value, cb));
}


function submit_form() {
  const field = document.getElementById('time_field');
  if (is_numeric(field.value)) {
    const value = parseFloat(field.value);
    set_allowance(value);
    reset_time();
    document.getElementById('error_message').style.opacity = 0;
  } else {
    document.getElementById('error_message').style.opacity = 1;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit_button').addEventListener('click', submit_form);

  get_allowance((allowance) => {
    document.getElementById('time_field').value = allowance;
  });
});

export function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token

  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  let uri = document.title === 'Villa Crisanta 1' ? 'http://127.0.0.1:5500/villa-1.html' : 'http://127.0.0.1:5500/villa-2.html'

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': '13411952836-3tpdg6hfrbpr3qgspqgo8kf6t9vjak1r.apps.googleusercontent.com',
                'redirect_uri': uri,
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

export function handleRequest(signInBtn, uriString) {
  let params = {};

  let regex = /[?&]+([^=&]+)=([^&]*)/g; // Updated regex pattern
  let url = window.location.href; // Using window.location.href to get the current URL

  let m;
  while ((m = regex.exec(url)) !== null) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  if (Object.keys(params).length > 0) {
      localStorage.setItem('authInfo', JSON.stringify(params));
  }

  let uri = uriString === 'villa-1' ? 'villa-1.html' : 'villa-2.html';

  window.history.pushState({}, document.title, '/' + uri);

  let info = JSON.parse(localStorage.getItem('authInfo'));

  if (info && info['access_token']) {
    signInBtn.parentElement.style.display = 'none';
    if(innerWidth > 768) {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight - 200);
      }, 1000)
    } else {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight - 1100);
      }, 1000)
    }
    
  } else {
    document.querySelector('.indicator').innerHTML = 'Not Signed In <br> <span class="text-sm">Please sign in to fill up the form</span>';
  }

}
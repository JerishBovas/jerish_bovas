window.onscroll = function() {
  let nav = document.getElementById("nav");
  let height = window.innerHeight - 76;

  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
    nav.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    nav.style.backgroundColor = 'rgb(44, 0, 138)'
  } else {
    nav.style.boxShadow = "none";
    nav.style.backgroundImage = 'none';
    nav.style.backgroundColor = 'rgba(44, 0, 138,0)';
  }

  if(isInViewport(document.getElementById('summary'))){
    document.getElementById('summarynav').style.fontWeight = 'bold'
    document.getElementById('summarynav').style.color = 'white'
    document.getElementById('projectsnav').style.fontWeight = '500'
    document.getElementById('projectsnav').style.color = 'rgba(242, 245, 247, 0.75)'
    document.getElementById('skillsnav').style.fontWeight = '500'
    document.getElementById('skillsnav').style.color = 'rgba(242, 245, 247, 0.75)'
    document.getElementById('contactnav').style.fontWeight = '500'
    document.getElementById('contactnav').style.color = 'rgba(242, 245, 247, 0.75)'
  }
  else if(isInViewport(document.getElementById('projects'))){
    document.getElementById('projectsnav').style.fontWeight = 'bold'
    document.getElementById('projectsnav').style.color = 'white'
    document.getElementById('summarynav').style.fontWeight = '500'
    document.getElementById('summarynav').style.color = 'rgba(242, 245, 247, 0.75)'
    document.getElementById('skillsnav').style.fontWeight = '500'
    document.getElementById('skillsnav').style.color = 'rgba(242, 245, 247, 0.75)'
    document.getElementById('contactnav').style.fontWeight = '500'
    document.getElementById('contactnav').style.color = 'rgba(242, 245, 247, 0.75)'
  }
  else if(isInViewport(document.getElementById('skills'))){
    document.getElementById('skillsnav').style.fontWeight = 'bold'
    document.getElementById('skillsnav').style.color = 'white'
    document.getElementById('summarynav').style.fontWeight = '500'
    document.getElementById('summarynav').style.color = 'rgba(242, 245, 247, 0.75)'
    document.getElementById('projectsnav').style.fontWeight = '500'
    document.getElementById('projectsnav').style.color = 'rgba(242, 245, 247, 0.75)'
    document.getElementById('contactnav').style.fontWeight = '500'
    document.getElementById('contactnav').style.color = 'rgba(242, 245, 247, 0.75)'
  }
  else if(isInViewport(document.getElementById('contact'))){
    document.getElementById('contactnav').style.fontWeight = 'bold'
    document.getElementById('contactnav').style.color = 'white'
    document.getElementById('summarynav').style.fontWeight = '500'
    document.getElementById('summarynav').style.color = 'rgba(242, 245, 247, 0.75)'
    document.getElementById('projectsnav').style.fontWeight = '500'
    document.getElementById('projectsnav').style.color = 'rgba(242, 245, 247, 0.75)'
    document.getElementById('skillsnav').style.fontWeight = '500'
    document.getElementById('skillsnav').style.color = 'rgba(242, 245, 247, 0.75)'
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)/2
  );
}

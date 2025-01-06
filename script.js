//const contenedor = document.getElementById('AllImgSocial');
const contenedor = document.querySelector('.ImgSocial');
//const contenedor = document.querySelector('footer');
const images = document.querySelectorAll('.imgsocial');
const facebook = document.querySelector('#facebook');
const instagram = document.querySelector('#instagram');
const github = document.querySelector('#github');
//const plataforma = navigator.userAgent;

// Configuración inicial para cada imagen
const configs = Array.from(images).map((img) => ({
    img, // Guardamos la referencia a la imagen    
    originalPosX: img.offsetLeft, // Guardamos la posición original X
    originalPosY: img.offsetTop, // Guardamos la posición original Y
    posX: Math.random() * (contenedor.clientWidth - 100), // Posición inicial X aleatoria
    //posX: img.offsetLeft - 100,
    posY: Math.random() * (contenedor.clientHeight), // Posición inicial Y aleatoria
    //posY: 30,
    velX: (Math.random() - 0.5) * 6, // Velocidad X aleatoria
    velY: (Math.random() - 0.5) * 6, // Velocidad Y aleatoria
    iterations: 0, // Contador de iteraciones
    maxIterations: 300, // Máximo de iteraciones
  }));  
  
  // Función para reorganizar las imágenes
  function reorganizeImages() {
    images.forEach((img, index) => {
      const config = configs[index];
      config.posX = Math.random() * (contenedor.clientWidth - 100);
      config.posY = Math.random() * (contenedor.clientHeight - 100);      
      //img.style.transform = `translate(${config.posX}px, ${config.posY}px)`;
      //img.style.transform = `translate(${config.originalPosX}px, ${config.originalPosY}px)`;
      img.style.transform = `translate(0px, ${config.originalPosY}px)`;
      //img.style.transform = 'none';
      //img.style.transform = `translate(none)`;
    });
    //console.log('Imágenes reorganizadas.');
    contenedor.style.justifyContent = 'center';
    contenedor.style.alignItems = 'center';
  }
  
  // Función para restaurar las posiciones originales
  function restoreOriginalPositions() {
    images.forEach((img, index) => {
      const config = configs[index];
      config.posX = config.originalPosX;
      config.posY = config.originalPosY;
      //console.log(config);
      //img.style.transform = `translate(${config.posX}px, ${config.posY}px)`;
      img.style.transform = `translate(0px, ${config.posY}px)`;
      //img.style.transform = `translate(${config.originalPosX}px, ${config.originalPosY}px)`;      
      //img.style.transform = 'none';
    });
    //console.log('Posiciones originales restauradas.');
    //contenedor.style.justifyContent = 'center';
  }
  
  // Función de animación para todas las imágenes
  function animate() {
    images.forEach((img, index) => {
        //console.log(img);
      const config = configs[index];
      const contWidth = contenedor.clientWidth;
      const contHeight = contenedor.clientHeight;
  
      // Actualizar posiciones
      config.posX += config.velX;
      config.posY += config.velY;
  
      // Detectar colisiones con los bordes del contenedor
      if (config.posX + 100 > contWidth || config.posX < 0) {
        config.velX = -config.velX;
        config.posX = Math.max(0, Math.min(config.posX, contWidth - 100));
      }
      if (config.posY + 100 > contHeight || config.posY < 0) {
        config.velY = -config.velY;
        config.posY = Math.max(0, Math.min(config.posY, contHeight - 100));
      }
  
      // Aplicar nueva posición a la imagen
      img.style.transform = `translate(${config.posX}px, ${config.posY}px)`;
  
      // Incrementar contador de iteraciones
      config.iterations++;
    });
  
    // Continuar la animación o detenerla y reorganizar
    const allDone = configs.every((config) => config.iterations >= config.maxIterations);
    if (!allDone) {
      requestAnimationFrame(animate);
    } else {
      reorganizeImages();
      setTimeout(() => {
        restoreOriginalPositions(); // Restauramos las posiciones originales después de reorganizar
      }, 500); // Un pequeño retraso antes de restaurar las posiciones originales
    }
  }
  
  // Iniciar la animación
  if (plataforma.includes('Win')) {
    animate();
  }

//creamos funcion para poner titulos
function Titulos() {
    if (facebook.onmouseover) {
      facebook.title = 'Ir a Facebook de Taylor Bundy';
    }
    if (instagram.onmouseover) {
      instagram.title = 'Ir a Instagram de Taylor Bundy';
    }
    if (github.onmouseover) {
      github.title = 'Ir a los repositorios de GitHub de Taylor Bundy';
    }
  }
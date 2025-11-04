import { onMounted, onUnmounted, watch } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

export function useFancybox(rootRef, selector = '[data-fancybox]', options = {}, settings={self:true}) {
  const bindFancybox = () => {
    if (!rootRef.value) return

    Fancybox.destroy()

    const elements = rootRef.value.querySelectorAll(selector)
    if (elements.length) {
      Fancybox.bind(elements, {
        on:{
            ready:(fancybox)=>{
                if(!settings.self) return;
                const container = fancybox.getContainer();
                const thumbsContainer = container.querySelector('.fancybox__thumbs');
                if (!thumbsContainer) return;
                container.classList.add("themeic__gallery"); 
                // var prevBtn = container.querySelector(".is-prev");
                // var nextBtn = container.querySelector(".is-next");
                // var nextBtnHtml = nextBtn.innerHTML;
                // var prevBtnHtml = prevBtn.innerHTML; 
                
                // prevBtn.remove();
                // nextBtn.remove();
                // // Create left/right arrow buttons
                // const newPrevBtn = document.createElement('button');
                // const newNextBtn = document.createElement('button');
                // newPrevBtn.className = 'fancybox-thumbs-prev';
                // newNextBtn.className = 'fancybox-thumbs-next';
                // newPrevBtn.innerHTML = prevBtnHtml;
                // newNextBtn.innerHTML = nextBtnHtml;

                // thumbsContainer.prepend(newPrevBtn);
                // thumbsContainer.append(newNextBtn);

                // // Scroll logic
                // const track = fancybox.getCarousel();
                // console.log(track);
                
                // newPrevBtn.addEventListener('click', () => track.prev());
                // newNextBtn.addEventListener('click', () => track.next());
            }
        },
        ...options
      })
    }
  }

  onMounted(() => {
    bindFancybox()
  })

  watch(rootRef, () => {
    bindFancybox()
  })

  onUnmounted(() => {
    Fancybox.destroy()
  })
}

export function openGallery(images = [], options = {}) {
  const defaultOptions = {
    loop: false,
    Thumbs: { autoStart: true },
    Toolbar: { display: ["close"] },
    ready: (fancybox) => {

    },
    ...options,
  };

  const items = images.map((img) => ({ src: img, type: "image" }));

  Fancybox.show(items, defaultOptions);
}
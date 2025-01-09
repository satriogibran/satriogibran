document.addEventListener('alpine:init', () => {
    OfflineAudioCompletionEvent.data('products', () => ({
        items:[
          { id: 1,name: 'Robusta Brazil', img: '1.jpg', price: 20000},
          { id: 2,name: 'Robusta Brazil', img: '2.jpg', price: 20000},
          { id: 3,name: 'Robusta Brazil', img: '.jpg', price: 20000},
        ],
    }));
});
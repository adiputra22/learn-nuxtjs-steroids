export default function (context) {
    console.log('middleware check-token');
    // dijalankan di server
    // jika dijalankan di client, context.req isinya undefined / null
    console.log('cookie:' + context.req); 
    context.store.dispatch('checkToken', context.req);
}
/**
 * ملف JavaScript لموقع حجز الفنادق
 */

// انتظر تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // تحديد العناصر
    const modal = document.getElementById('booking-modal');
    const bookButtons = document.querySelectorAll('.book-now');
    const closeBtn = document.querySelector('.close-btn');
    const hotelName = document.getElementById('modal-hotel-name');
    
    // فتح النافذة المنبثقة
    bookButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const name = this.getAttribute('data-hotel');
            hotelName.textContent = `حجز ${name}`;
            modal.classList.add('active');
        });
    });
    
    // إغلاق النافذة المنبثقة
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }
    
    // إغلاق النافذة عند النقر خارجها
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // التحقق من نموذج البحث
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('تم إرسال طلب البحث بنجاح!');
        });
    }
});
const btnDis = document.querySelector('.dismotivation-btn');
const btnDisC = document.querySelector('.disconsentration-btn');
const btnNSelfC = document.querySelector('.not-self-control-btn');
const btnTent = document.querySelector('.tentations-btn');
const btnTime= document.querySelector('.time-managment-btn');
const btnIndecision = document.querySelector('.indecision-btn');
const btnConf = document.querySelector('.confidence-btn');
const texto = document.querySelector('.text-content');

btnDis.addEventListener('click', () => {
    texto.innerHTML = 'Many people think discipline appears like a powerful lightning bolt, but in reality it starts as a small spark. You don’t need to change your life in one day; you just need to repeat small steps even when you don’t feel like it. Each habit is a silent brick building a stronger version of yourself. Motivation comes and goes, but consistency turns ordinary days into extraordinary results. Even moving slowly is still progress, and every daily effort brings you closer to your goals than you imagine.';
});

btnDisC.addEventListener('click', () => {
    texto.innerHTML = 'Distraction is the enemy of focus. In a world full of constant notifications and endless information, it’s easy to lose sight of what truly matters. To combat this, create a distraction-free environment by turning off unnecessary notifications, setting specific times for checking emails and social media, and dedicating focused blocks of time to important tasks. Remember, the more you protect your attention, the more you can accomplish.';
});

btnNSelfC.addEventListener('click', () => {
    texto.innerHTML = 'Self-control is like a muscle that gets stronger with use. It’s not about being perfect; it’s about making better choices consistently. When you feel the urge to give in to temptation or procrastinate, take a moment to pause and remind yourself of your long-term goals. By practicing self-control in small moments, you build resilience and create a foundation for achieving bigger successes.';
});

btnTent.addEventListener('click', () => {
    texto.innerHTML = 'Temptations are everywhere, but they don’t have to control you. When faced with a temptation, try to identify the underlying need or emotion driving it. Instead of giving in, find healthier alternatives that can satisfy that need. For example, if you’re tempted to procrastinate by scrolling through social media, take a short walk or do a quick workout instead. By redirecting your energy towards positive actions, you can overcome temptations and stay on track with your goals.';
});

btnTime.addEventListener('click', () => {
    texto.innerHTML = 'Time management is not about doing more, but about doing what matters most. Start by prioritizing your tasks based on their importance and urgency. Use techniques like the Pomodoro Technique to break your work into focused intervals with short breaks in between. Remember, it’s not about being busy, but about being productive. By managing your time effectively, you can achieve more while maintaining a healthy work-life balance.';
});

btnConf.addEventListener('click', () => {
    texto.innerHTML = 'Self-confidence is built through action and experience. It’s not about waiting for the perfect moment or having all the answers; it’s about taking small steps towards your goals and learning from each experience. Celebrate your successes, no matter how small, and don’t be afraid to make mistakes. Each challenge you overcome adds to your confidence and brings you closer to becoming the best version of yourself.';
}); 

btnIndecision.addEventListener('click', () => {
    texto.innerHTML = 'Indecision can be paralyzing, but it’s important to remember that no decision is often worse than a bad decision. When faced with a choice, gather the necessary information, weigh the pros and cons, and then trust your instincts to make a decision. Remember, you can always adjust your course if needed. Taking action, even if it’s not perfect, is a step towards progress and growth.';
});

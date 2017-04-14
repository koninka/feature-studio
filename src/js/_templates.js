export const {
   productModalContent
} = {
        productModalContent: `
      {% if images|length > 0 %}
        <div class="modal__left modal__left--desktop">
            <div class="slider-for js-modal-slider-for">
              {% for image in images %}
                <div class="slider-for__slide">
                    <img data-lazy="{{ image }}" alt="{{ title }}" title="{{ title }}">
                </div>
              {% endfor %}
            </div>
            <div class="slider-nav-wrap">
                <button class="slider-nav-prev js-slider-nav-prev" type="button"></button>
                <button class="slider-nav-next js-slider-nav-next" type="button"></button>
                <div class="slider-nav-out">
                    <div class="slider-nav js-modal-slider-nav">
                    {% for image in images %}
                      <div class="slider-nav__slide">
                          <img data-lazy="{{ image }}" alt="{{ title }}" title="{{ title }}">
                      </div>
                    {% endfor %}
                    </div>
                </div>
            </div>
        </div>
      {% endif %}
      <div class="modal__right{% if images|length == 0 %} modal__right--w100{% endif %}">
          <div class="modal__title">{{ title }}</div>
          <p>{{ description|safe }}</p>
          <div class="characteristics">
              {% if colors %}
                 <div class="characteristics__row">
                     <div class="characteristics__name">Цвет:</div>
                        <div class="characteristics__data">
                        {% for color in colors %}
                            <div class="characteristics__color" style="background-color: {{ color }};"></div>
                         {% endfor %}
                        </div>
                 </div>
              {% endif %}
              {% if size %}
                 <div class="characteristics__row">
                     <div class="characteristics__name">Размер:</div>
                     <div class="characteristics__data">{{ size }}</div>
                 </div>
              {% endif %}
              {% if material %}
                 <div class="characteristics__row">
                     <div class="characteristics__name">Материал:</div>
                     <div class="characteristics__data">{{ material }}</div>
                 </div>
              {% endif %}
              {% if capacity %}
                 <div class="characteristics__row">
                     <div class="characteristics__name">Емкость:</div>
                     <div class="characteristics__data">{{ capacity }}</div>
                 </div>
              {% endif %}
              {% for c in characteristics %}
                  <div class="characteristics__row">
                     <div class="characteristics__name">{{ c.name }}:</div>
                     <div class="characteristics__data">{{ c.value }}</div>
                 </div>
              {% endfor %}
          </div>
          {% if images|length > 0 %}
            <div class="modal__left modal__left--mobile">
                <div class="slider-for js-modal-slider-for">
                 {% for image in images %}
                   <div class="slider-for__slide">
                       <img data-lazy="{{ image }}" alt="{{ title }}" title="{{ title }}">
                   </div>
                 {% endfor %}
                </div>
                <div class="slider-nav-wrap">
                    <button class="slider-nav-prev js-slider-nav-prev" type="button"></button>
                    <button class="slider-nav-next js-slider-nav-next" type="button"></button>
                    <div class="slider-nav-out">
                      <div class="slider-nav js-modal-slider-nav">
                         {% for image in images %}
                           <div class="slider-nav__slide">
                               <img data-lazy="{{ image }}" alt="{{ title }}" title="{{ title }}">
                           </div>
                         {% endfor %}
                       </div>
                    </div>
                </div>
            </div>
          {% endif %}
          <a href="#services" class="btn js-go-to" onclick="if (window.isNonLocalRequest) { ga('send', 'event', 'click', 'order_catalog'); if (typeof yaCounter44092294 !== 'undefined') { yaCounter44092294.reachGoal('click_order_catalog'); } }; return true;">Заказать услуги</a>
          <script>
            $(document).ready(function(){
	let goToBtn = $(".js-go-to"),
		htmlBody = $('html, body');
	goToBtn.click(function () {
		var id = $(this).attr("href"),
			posTop = $(id).offset().top;
		scrollTo(posTop);
		return false;
	});
	let scrollTo = (position) => {
		htmlBody.animate({
			scrollTop: position
		}, 700);
	};
})
          </script>
      </div>
  `
    };
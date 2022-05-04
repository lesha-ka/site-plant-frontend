export const getSelect = () => {
    if(document.querySelector('.select')) {
        const CLASS_NAME_SELECT = 'select';
        const CLASS_NAME_ACTIVE = 'select-show';
        const CLASS_NAME_SELECTED = 'select-option-selected';
        const SELECTOR_ACTIVE = '.select-show';
        const SELECTOR_DATA = '[data-select]';
        const SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';
        const SELECTOR_OPTION_SELECTED = '.select-option-selected';

        class CustomSelect {
        constructor(target, params) {
            this._elRoot = typeof target === 'string' ? document.querySelector(target) : target;
            this._params = params || {};
            this._onClickFn = this._onClick.bind(this);
            if (this._params['options']) {
            this._elRoot.classList.add(CLASS_NAME_SELECT);
            this._elRoot.innerHTML = CustomSelect.template(this._params);
            }
            this._elToggle = this._elRoot.querySelector(SELECTOR_DATA_TOGGLE);
            this._elRoot.addEventListener('click', this._onClickFn);
        }
        _onClick(e) {
            const target = e.target;
            const type = target.closest(SELECTOR_DATA).dataset.select;
            switch (type) {
            case 'toggle':
                this.toggle();
                break;
            case 'option':
                this._changeValue(target);
                break;
            }
        }
        _update(option) {
            option = option.closest('.select-option');
            const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
            if (selected) {
            selected.classList.remove(CLASS_NAME_SELECTED);
            }
            option.classList.add(CLASS_NAME_SELECTED);
            this._elToggle.textContent = option.textContent;
            this._elToggle.value = option.dataset['value'];
            this._elToggle.dataset.index = option.dataset['index'];
            this._elRoot.dispatchEvent(new CustomEvent('select.change'));
            this._params.onSelected ? this._params.onSelected(this, option) : null;
            return option.dataset['value'];
        }
        _reset() {
            const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
            if (selected) {
            selected.classList.remove(CLASS_NAME_SELECTED);
            }
            this._elToggle.textContent = 'Выберите из списка';
            this._elToggle.value = '';
            this._elToggle.dataset.index = -1;
            this._elRoot.dispatchEvent(new CustomEvent('select.change'));
            this._params.onSelected ? this._params.onSelected(this, null) : null;
            return '';
        }
        _changeValue(option) {
            if (option.classList.contains(CLASS_NAME_SELECTED)) {
            return;
            }
            this._update(option);
            this.hide();
        }
        show() {
            document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
            select.classList.remove(CLASS_NAME_ACTIVE);
            });
            this._elRoot.classList.add(CLASS_NAME_ACTIVE);
        }
        hide() {
            this._elRoot.classList.remove(CLASS_NAME_ACTIVE);
        }
        toggle() {
            if (this._elRoot.classList.contains(CLASS_NAME_ACTIVE)) {
            this.hide();
            } else {
            this.show();
            }
        }
        dispose() {
            this._elRoot.removeEventListener('click', this._onClickFn);
        }
        get value() {
            return this._elToggle.value;
        }
        set value(value) {
            let isExists = false;
            this._elRoot.querySelectorAll('.select-option').forEach((option) => {
            if (option.dataset['value'] === value) {
                isExists = true;
                return this._update(option);
            }
            });
            if (!isExists) {
            return this._reset();
            }
        }
        get selectedIndex() {
            return this._elToggle.dataset['index'];
        }
        set selectedIndex(index) {
            const option = this._elRoot.querySelector(`.select-option[data-index="${index}"]`);
            if (option) {
            return this._update(option);
            }
            return this._reset();
        }
        }

        CustomSelect.template = params => {
        const name = params['name'];
        const options = params['options'];
        const targetValue = params['targetValue'];
        let items = [];
        let selectedIndex = -1;
        let selectedValue = '';
        let selectedContent = 'Выберите из списка';
        options.forEach((option, index) => {
            let selectedClass = '';
            if (option[0] === targetValue) {
            selectedClass = ' select-option-selected';
            selectedIndex = index;
            selectedValue = option[0];
            selectedContent = option[1];
            }
            items.push(`<li class="select-option${selectedClass}" data-select="option" data-value="${option[0]}" data-index="${index}">${option[1]}</li>`);
        });
        return `<button type="button" class="select-toggle" name="${name}" value="${selectedValue}" data-select="toggle" data-index="${selectedIndex}">${selectedContent}</button>
        <div class="select-dropdown">
            <ul class="select-options">${items.join('')}</ul>
        </div>`;
        };


        document.addEventListener('click', (e) => {
        if (!e.target.closest('.select')) {
            document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
            select.classList.remove(CLASS_NAME_ACTIVE);
            });
        }
        });
        if(document.querySelector('#js-selectGroup')) {
            const select1 = new CustomSelect('#js-selectGroup');
            const select2 = new CustomSelect('#js-selectSort');
        }
        if(document.querySelector('#js-selectAddress')) {
            const select3 = new CustomSelect('#js-selectAddress');
            const select4 = new CustomSelect('#js-selectAddressTransport');
        }
        if(document.querySelector('#js-selectGender')) {
            const select5 = new CustomSelect('#js-selectGender');
        }
    }
}
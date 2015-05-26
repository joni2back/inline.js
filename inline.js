(function(){

    var formulas = {
        t: 'top',
        b: 'bottom',
        l: 'left',
        r: 'right',

        w: 'width',
        h: 'height',

        p: 'padding',
        m: 'margin',

        br: 'borderRadius',
        fs: 'fontSize',
        fw: 'fontWeight',
        lh: 'lineHeight',

        mt: 'marginTop',
        mb: 'marginBottom',
        ml: 'marginLeft',
        mr: 'marginRight',

        pt: 'paddingTop',
        pb: 'paddingBottom',
        pl: 'paddingLeft',
        pr: 'paddingRight',
    }

    var useFormula = function(className) {
        var pieces = className.match(/(^[a-z]{1,23})([0-9]{1,4})([pxempt\%]{1,2})?/);
        var formula = pieces && formulas[pieces[1]];
        var measure = pieces && pieces[3] || 'px';
        return formula && {
            key: formula,
            value: pieces[2] + measure
        };
    };

    var parseElementClasses = function(element) {
        var classNames = element && element.className && element.className.split(' ') || [];
        classNames.forEach(function(className) {
            var style = useFormula(className);
            style && style.key && (element.style[style.key] = style.value);
        });
    }

    var apply = function(scopeElement, dontObserve) {
        var scope = scopeElement || window.document;
        var elements = scope.getElementsByTagName('*');
        for (var i in elements) {
            var element = elements[i];
            if (typeof element === 'object') {
                parseElementClasses(element);
                !dontObserve && observer.observe(element, { attributes: true, attributeFilter: ['class'] });
            }
        }
    };

    var observer = new window.MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            var element = mutationRecord.target;
            element.lastClassName !== element.className && parseElementClasses(element);
            element.lastClassName = element.className;
        });
    });

    if (typeof window === 'object' && window.document) {
        return window.inlinejs = {
            apply: apply,
            formulas: formulas
        };
    }

    throw new Error('Invalid environment');

})(window);
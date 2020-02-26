class Filters {
    constructor(results, options) {
        this.results = results;
        this.options = options;
        // this.results.push(results);

        this.filtersObject = {};
        this.setFilters();
        this.renderFilters();
    }

    setFilters() {
        let that = this;
        this.results.forEach(item => {
            for (let key in item){
               if(item.hasOwnProperty(key)) {
                   if (key === 'location' || key === 'status') {

                       if (!that.filtersObject.hasOwnProperty(key)) {
                           that.filtersObject[key] = [];
                       }

                       if (!that.filtersObject[key].includes(item[key])){
                           that.filtersObject[key].push(item[key]);
                       }
                   }
               }
            }
        })
    }

    renderFilters() {

        for (let filterName in this.filtersObject) {
            if (this.filtersObject.hasOwnProperty(filterName)){
                let filterValues = this.filtersObject[filterName];

                let filterBlock = $("<div>");
                let h3 = $("<h3>").text(filterName);

                filterBlock.append(h3);

                filterValues.forEach(value => {
                    let label = $("<label>").text(value);
                    let input = $("<input>").attr('type', 'checkbox');

                    label.append(input);
                    filterBlock.append(label);
                });
                $(this.options.filterViewBlock).append(filterBlock);

        }
        }
    }
}


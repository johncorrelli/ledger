const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  unitDisplay: 'long',
});

function formatByDocumentQuery(query, callback) {
  const elements = $(query).map((_, ele) => {
    const rawValue = $(ele).text();

    if (rawValue === '') {
      return;
    }

    $(ele).html(callback(rawValue, ele));
  });
}

window.addEventListener('load', function () {
  formatByDocumentQuery('.format-date', (value, element) => {
    var dateValue = `${value}T00:00:00`;

    return $.format.date(dateValue, $(element).attr('format'))
  });

  formatByDocumentQuery('.format-money', (value, _) => currencyFormatter.format(value));
});

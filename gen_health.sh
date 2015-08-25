for i in 2 9 16 23 30
do
    wkhtmltopdf -s A1 http://localhost:8000/health.html?idx=$i health/$i.pdf
done

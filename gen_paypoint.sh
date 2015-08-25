for i in 2
do
    wkhtmltopdf -s A1 -R 0 -L 0 -B 0 -T 0 --debug-javascript http://localhost:8000/paypoint.html?idx=$i $i.pdf
    mv $i.pdf paypoint/
done

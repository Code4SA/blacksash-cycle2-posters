for i in 2 9 16 23 30 37 44 51
do
    wkhtmltopdf -s A1 -R 0 -L 0 -B 0 -T 0 --debug-javascript http://localhost:8000/sassa.html?idx=$i $i.pdf
    mv $i.pdf sassa/
done

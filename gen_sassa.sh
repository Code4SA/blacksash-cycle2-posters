for i in 2 9 16 23 30 37 44 51
do
    wkhtmltopdf -s A1 http://localhost:8000/index2.html?idx=$i $i.pdf
done

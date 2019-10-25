FROM php:7.2-apache

RUN docker-php-ext-install pdo pdo_mysql
RUN apt-get update && apt-get install unoconv  -y

RUN a2enmod rewrite

WORKDIR /var/www/html

COPY . .

WORKDIR /etc/apache2/sites-available

COPY ./000-default.conf .

WORKDIR /etc
COPY ./sudoers .

# Generated by Django 4.1.5 on 2023-03-22 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_order_shippingaddress_orderitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='shippingaddress',
            name='phone',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]

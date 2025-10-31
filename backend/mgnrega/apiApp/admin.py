from django.contrib import admin
from .models import MGNREGAData

@admin.register(MGNREGAData)
class MGNREGADataAdmin(admin.ModelAdmin):
    list_display = (
        'district_name',
        'state_name',
        'month',
        'fin_year',
        'approved_labour_budget',
        'avg_wage_rate',
        'total_expenditure',
        'works_completed',
    )
    search_fields = ('district_name', 'state_name', 'month', 'fin_year')
    list_filter = ('state_name', 'month', 'fin_year')
    ordering = ('district_name',)
from django.db import models

class MGNREGAData(models.Model):
    fin_year = models.CharField(max_length=20)
    month = models.CharField(max_length=20)
    state_code = models.IntegerField()
    state_name = models.CharField(max_length=100)
    district_code = models.IntegerField()
    district_name = models.CharField(max_length=100)

    approved_labour_budget = models.BigIntegerField(null=True, blank=True)
    avg_wage_rate = models.FloatField()
    avg_days_employment = models.FloatField()
    differently_abled_persons_worked = models.IntegerField()
    material_and_skilled_wages = models.FloatField()
    works_completed = models.IntegerField()
    gps_with_nil_exp = models.IntegerField()
    ongoing_works = models.IntegerField()
    persondays_central_liability = models.BigIntegerField()

    sc_persondays = models.BigIntegerField()
    sc_workers_percent = models.FloatField()
    st_persondays = models.BigIntegerField()
    st_workers_percent = models.FloatField()
    total_adm_expenditure = models.FloatField()
    total_expenditure = models.FloatField()
    total_households_worked = models.IntegerField()
    total_individuals_worked = models.IntegerField()
    total_active_job_cards = models.IntegerField()
    total_active_workers = models.IntegerField()
    households_completed_100_days = models.IntegerField()
    total_jobcards_issued = models.IntegerField()
    total_workers = models.IntegerField()
    total_works_takenup = models.IntegerField()
    total_wages = models.FloatField()
    women_persondays = models.BigIntegerField()
    percent_category_b_works = models.FloatField()
    percent_agri_allied_exp = models.FloatField()
    percent_nrm_exp = models.FloatField()
    percent_payments_15days = models.FloatField()
    remarks = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.district_name} ({self.month} - {self.fin_year})"
    
# from django.db import models

# # Create your models here.

# class MGNREGAData(models.Model):
#     fin_year = models.CharField(max_length=20)
#     month = models.CharField(max_length=20)
#     district_name = models.CharField(max_length=100)
#     avg_wage_rate = models.FloatField()
#     avg_days_employment = models.FloatField()
#     total_households_worked = models.IntegerField()
#     total_persondays = models.IntegerField()
#     total_wages = models.FloatField()
#     works_completed = models.IntegerField()
#     women_persondays = models.IntegerField()
#     percent_payments_15days = models.FloatField()
#     total_expenditure = models.FloatField()

#     def __str__(self):
#         return f"{self.district_name} ({self.month} - {self.fin_year})"
from django.db import models

class MGNREGAData(models.Model):
    fin_year = models.CharField(max_length=20)
    month = models.CharField(max_length=20)
    state_code = models.IntegerField()
    state_name = models.CharField(max_length=100)
    district_code = models.IntegerField()
    district_name = models.CharField(max_length=100)

    approved_labour_budget = models.BigIntegerField(null=True, blank=True, db_column='Approved_Labour_Budget')
    avg_wage_rate = models.FloatField(db_column='Average_Wage_rate_per_day_per_person')
    avg_days_employment = models.FloatField(db_column='Average_days_of_employment_provided_per_Household')
    differently_abled_persons_worked = models.IntegerField(db_column='Differently_abled_persons_worked')
    material_and_skilled_wages = models.FloatField(db_column='Material_and_skilled_Wages')
    works_completed = models.IntegerField(db_column='Number_of_Completed_Works')
    gps_with_nil_exp = models.IntegerField(db_column='Number_of_GPs_with_NIL_exp')
    ongoing_works = models.IntegerField(db_column='Number_of_Ongoing_Works')
    persondays_central_liability = models.BigIntegerField(db_column='Persondays_of_Central_Liability_so_far')
    sc_persondays = models.BigIntegerField(db_column='SC_persondays')
    sc_workers_percent = models.FloatField(db_column='SC_workers_against_active_workers')
    st_persondays = models.BigIntegerField(db_column='ST_persondays')
    st_workers_percent = models.FloatField(db_column='ST_workers_against_active_workers')
    total_adm_expenditure = models.FloatField(db_column='Total_Adm_Expenditure')
    total_expenditure = models.FloatField(db_column='Total_Exp')
    total_households_worked = models.IntegerField(db_column='Total_Households_Worked')
    total_individuals_worked = models.IntegerField(db_column='Total_Individuals_Worked')
    total_active_job_cards = models.IntegerField(db_column='Total_No_of_Active_Job_Cards')
    total_active_workers = models.IntegerField(db_column='Total_No_of_Active_Workers')
    households_completed_100_days = models.IntegerField(db_column='Total_No_of_HHs_completed_100_Days_of_Wage_Employment')
    total_jobcards_issued = models.IntegerField(db_column='Total_No_of_JobCards_issued')
    total_workers = models.IntegerField(db_column='Total_No_of_Workers')
    total_works_takenup = models.IntegerField(db_column='Total_No_of_Works_Takenup')
    total_wages = models.FloatField(db_column='Wages')
    women_persondays = models.BigIntegerField(db_column='Women_Persondays')
    percent_category_b_works = models.FloatField(db_column='percent_of_Category_B_Works')
    percent_agri_allied_exp = models.FloatField(db_column='percent_of_Expenditure_on_Agriculture_Allied_Works')
    percent_nrm_exp = models.FloatField(db_column='percent_of_NRM_Expenditure')
    percent_payments_15days = models.FloatField(db_column='percentage_payments_gererated_within_15_days')
    remarks = models.CharField(max_length=255, blank=True, null=True, db_column='Remarks')

    class Meta:
        db_table = 'apiApp_mgnrega'  # exact table name in Supabase

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
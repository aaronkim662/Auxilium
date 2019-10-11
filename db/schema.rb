# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_10_224405) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.string "time"
    t.bigint "teacher_id", null: false
    t.bigint "student_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_appointments_on_student_id"
    t.index ["teacher_id"], name: "index_appointments_on_teacher_id"
  end

  create_table "availabilities", force: :cascade do |t|
    t.string "time"
    t.bigint "teacher_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["teacher_id"], name: "index_availabilities_on_teacher_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "program"
    t.string "cohort"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email"
  end

  create_table "teachers", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.integer "years_of_experience"
    t.date "time_availability"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email"
  end

  create_table "teacherstudents_times", id: false, force: :cascade do |t|
    t.bigint "teacherstudent_id", null: false
    t.bigint "time_id", null: false
  end

  add_foreign_key "appointments", "students"
  add_foreign_key "appointments", "teachers"
  add_foreign_key "availabilities", "teachers"
end

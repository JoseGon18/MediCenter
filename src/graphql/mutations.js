/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCondition = /* GraphQL */ `
  mutation CreateCondition(
    $input: CreateConditionInput!
    $condition: ModelConditionConditionInput
  ) {
    createCondition(input: $input, condition: $condition) {
      conditionId
      name
      details
      diagnosisDate
      diagnosingDoctor
      hospitalCenter
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCondition = /* GraphQL */ `
  mutation UpdateCondition(
    $input: UpdateConditionInput!
    $condition: ModelConditionConditionInput
  ) {
    updateCondition(input: $input, condition: $condition) {
      conditionId
      name
      details
      diagnosisDate
      diagnosingDoctor
      hospitalCenter
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCondition = /* GraphQL */ `
  mutation DeleteCondition(
    $input: DeleteConditionInput!
    $condition: ModelConditionConditionInput
  ) {
    deleteCondition(input: $input, condition: $condition) {
      conditionId
      name
      details
      diagnosisDate
      diagnosingDoctor
      hospitalCenter
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      ssn
      firstName
      lastName
      hasPiercings
      bloodType
      gender
      sex
      birthDate
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      hasMedications {
        medicationId
        name
        type
        manufacturer
        dosage
        current
        hasProvider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        dateOfPrescription
        id
        createdAt
        updatedAt
        owner
      }
      hasAllergies {
        allergyId
        name
        diagnosisDate
        id
        createdAt
        updatedAt
        owner
      }
      hasSurgeries {
        surgeryId
        name
        date
        provider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      hasProviders {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      hasFamily {
        familyId
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        firstName
        lastName
        birthDate
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      ssn
      firstName
      lastName
      hasPiercings
      bloodType
      gender
      sex
      birthDate
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      hasMedications {
        medicationId
        name
        type
        manufacturer
        dosage
        current
        hasProvider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        dateOfPrescription
        id
        createdAt
        updatedAt
        owner
      }
      hasAllergies {
        allergyId
        name
        diagnosisDate
        id
        createdAt
        updatedAt
        owner
      }
      hasSurgeries {
        surgeryId
        name
        date
        provider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      hasProviders {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      hasFamily {
        familyId
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        firstName
        lastName
        birthDate
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      ssn
      firstName
      lastName
      hasPiercings
      bloodType
      gender
      sex
      birthDate
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      hasMedications {
        medicationId
        name
        type
        manufacturer
        dosage
        current
        hasProvider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        dateOfPrescription
        id
        createdAt
        updatedAt
        owner
      }
      hasAllergies {
        allergyId
        name
        diagnosisDate
        id
        createdAt
        updatedAt
        owner
      }
      hasSurgeries {
        surgeryId
        name
        date
        provider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      hasProviders {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      hasFamily {
        familyId
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        firstName
        lastName
        birthDate
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMedication = /* GraphQL */ `
  mutation CreateMedication(
    $input: CreateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    createMedication(input: $input, condition: $condition) {
      medicationId
      name
      type
      manufacturer
      dosage
      current
      hasProvider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      dateOfPrescription
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMedication = /* GraphQL */ `
  mutation UpdateMedication(
    $input: UpdateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    updateMedication(input: $input, condition: $condition) {
      medicationId
      name
      type
      manufacturer
      dosage
      current
      hasProvider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      dateOfPrescription
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMedication = /* GraphQL */ `
  mutation DeleteMedication(
    $input: DeleteMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    deleteMedication(input: $input, condition: $condition) {
      medicationId
      name
      type
      manufacturer
      dosage
      current
      hasProvider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      dateOfPrescription
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAllergy = /* GraphQL */ `
  mutation CreateAllergy(
    $input: CreateAllergyInput!
    $condition: ModelAllergyConditionInput
  ) {
    createAllergy(input: $input, condition: $condition) {
      allergyId
      name
      diagnosisDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAllergy = /* GraphQL */ `
  mutation UpdateAllergy(
    $input: UpdateAllergyInput!
    $condition: ModelAllergyConditionInput
  ) {
    updateAllergy(input: $input, condition: $condition) {
      allergyId
      name
      diagnosisDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAllergy = /* GraphQL */ `
  mutation DeleteAllergy(
    $input: DeleteAllergyInput!
    $condition: ModelAllergyConditionInput
  ) {
    deleteAllergy(input: $input, condition: $condition) {
      allergyId
      name
      diagnosisDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSurgery = /* GraphQL */ `
  mutation CreateSurgery(
    $input: CreateSurgeryInput!
    $condition: ModelSurgeryConditionInput
  ) {
    createSurgery(input: $input, condition: $condition) {
      surgeryId
      name
      date
      provider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSurgery = /* GraphQL */ `
  mutation UpdateSurgery(
    $input: UpdateSurgeryInput!
    $condition: ModelSurgeryConditionInput
  ) {
    updateSurgery(input: $input, condition: $condition) {
      surgeryId
      name
      date
      provider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSurgery = /* GraphQL */ `
  mutation DeleteSurgery(
    $input: DeleteSurgeryInput!
    $condition: ModelSurgeryConditionInput
  ) {
    deleteSurgery(input: $input, condition: $condition) {
      surgeryId
      name
      date
      provider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProvider = /* GraphQL */ `
  mutation CreateProvider(
    $input: CreateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    createProvider(input: $input, condition: $condition) {
      providerId
      name
      hospitalOffice {
        healthLocId
        name
        address {
          street
          city
          state
          zipcode
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      specialty
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProvider = /* GraphQL */ `
  mutation UpdateProvider(
    $input: UpdateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    updateProvider(input: $input, condition: $condition) {
      providerId
      name
      hospitalOffice {
        healthLocId
        name
        address {
          street
          city
          state
          zipcode
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      specialty
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProvider = /* GraphQL */ `
  mutation DeleteProvider(
    $input: DeleteProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    deleteProvider(input: $input, condition: $condition) {
      providerId
      name
      hospitalOffice {
        healthLocId
        name
        address {
          street
          city
          state
          zipcode
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      specialty
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createHealthcareLoc = /* GraphQL */ `
  mutation CreateHealthcareLoc(
    $input: CreateHealthcareLocInput!
    $condition: ModelHealthcareLocConditionInput
  ) {
    createHealthcareLoc(input: $input, condition: $condition) {
      healthLocId
      name
      address {
        street
        city
        state
        zipcode
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateHealthcareLoc = /* GraphQL */ `
  mutation UpdateHealthcareLoc(
    $input: UpdateHealthcareLocInput!
    $condition: ModelHealthcareLocConditionInput
  ) {
    updateHealthcareLoc(input: $input, condition: $condition) {
      healthLocId
      name
      address {
        street
        city
        state
        zipcode
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteHealthcareLoc = /* GraphQL */ `
  mutation DeleteHealthcareLoc(
    $input: DeleteHealthcareLocInput!
    $condition: ModelHealthcareLocConditionInput
  ) {
    deleteHealthcareLoc(input: $input, condition: $condition) {
      healthLocId
      name
      address {
        street
        city
        state
        zipcode
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      street
      city
      state
      zipcode
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      street
      city
      state
      zipcode
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      street
      city
      state
      zipcode
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFamilyMember = /* GraphQL */ `
  mutation CreateFamilyMember(
    $input: CreateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    createFamilyMember(input: $input, condition: $condition) {
      familyId
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      firstName
      lastName
      birthDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFamilyMember = /* GraphQL */ `
  mutation UpdateFamilyMember(
    $input: UpdateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    updateFamilyMember(input: $input, condition: $condition) {
      familyId
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      firstName
      lastName
      birthDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFamilyMember = /* GraphQL */ `
  mutation DeleteFamilyMember(
    $input: DeleteFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    deleteFamilyMember(input: $input, condition: $condition) {
      familyId
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      firstName
      lastName
      birthDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;

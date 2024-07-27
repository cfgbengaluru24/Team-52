import mongoose from "mongoose";
import Beneficiary from "../model/Beneficiary.js";
import Scheme from "../model/Scheme.js";


async function getEligibleBeneficiaries(schemeId) {
    try {
        // Find the scheme by ID   
        const scheme = await Scheme.findById(schemeId);

        if (!scheme) {
            throw new Error('Scheme not found');
        }

        // Build the query based on the scheme's criteria
        const query = {};

        if (scheme.criteria.age_range) {
            if (scheme.criteria.age_range.min !== undefined) {
                query.age = { $gte: scheme.criteria.age_range.min };
            }
            if (scheme.criteria.age_range.max !== undefined) {
                query.age = { ...query.age, $lte: scheme.criteria.age_range.max };
            }
        }

        if (scheme.criteria.gender) {
            query.gender = { $in: scheme.criteria.gender };
        }

        if (scheme.criteria.income !== undefined) {
            query.income = { $lte: scheme.criteria.income };
        }

        if (scheme.criteria.region) {
            query.region = { $in: scheme.criteria.region };
        }

        if (scheme.criteria.category) {
            query.category = { $in: scheme.criteria.category };
        }

        if (scheme.criteria.marital_status) {
            query.marital_status === scheme.criteria.marital_status;
        }

        // Find all beneficiaries that match the criteria
        const beneficiaries = await Beneficiary.find(query);

        return beneficiaries;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Example usage
export default getEligibleBeneficiaries;




async function getEligibleSchemes(beneficiaryId) {
    try {
        // Find the beneficiary by ID
        const beneficiary = await Beneficiary.findById(beneficiaryId);

        if (!beneficiary) {
            throw new Error('Beneficiary not found');
        }

        // Retrieve all schemes
        const schemes = await Scheme.find();

        const eligibleSchemes = schemes.filter(scheme => {
            // Build the eligibility criteria for the beneficiary
            const criteria = scheme.criteria;

            let isEligible = true;

            if (criteria.age_range) {
                const age = beneficiary.age; // Assuming you have an age field in Beneficiary
                if (criteria.age_range.min !== undefined && age < criteria.age_range.min) {
                    isEligible = false;
                }
                if (criteria.age_range.max !== undefined && age > criteria.age_range.max) {
                    isEligible = false;
                }
            }

            if (criteria.gender && !criteria.gender.includes(beneficiary.gender)) {
                isEligible = false;
            }

            if (criteria.income !== undefined && beneficiary.income > criteria.income) {
                isEligible = false;
            }

            if (criteria.region && !criteria.region.includes(beneficiary.region)) {
                isEligible = false;
            }

            if (criteria.category && !criteria.category.includes(beneficiary.category)) {
                isEligible = false;
            }

            if (criteria.marital_status && criteria.marital_status !== beneficiary.marital_status) {
                isEligible = false;
            }

            return isEligible;
        });

        return eligibleSchemes;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Example usage
getEligibleSchemes('60d5f8f8b6e3a0b5c8dcb3f0')
    .then(schemes => {
        console.log('Eligible Schemes:', schemes);
    })
    .catch(error => {
        console.error('Error fetching eligible schemes:', error);
    });

